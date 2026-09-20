import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xd05dubhb {
  fill: currentColor;
  d: path("M10 8c3.314 0 6-1.343 6-3s-2.686-3-6-3s-6 1.343-6 3s2.686 3 6 3m4.69.016c.47-.235.927-.534 1.31-.896V15c0 1.657-2.686 3-6 3s-6-1.343-6-3V7.12c.383.362.84.661 1.31.896C6.562 8.642 8.222 9 10 9s3.438-.358 4.69-.984");
}
</style><path class="xd05dubhb"/>`,
		"fallback": "fluent:database-20-filled",
	});
}

export default Component;
