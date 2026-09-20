import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.e9zzaognc {
  fill: currentColor;
  d: path("M6.5 2A4.5 4.5 0 0 0 2 6.5v15A4.5 4.5 0 0 0 6.5 26h5v-2h-5A2.5 2.5 0 0 1 4 21.5v-15A2.5 2.5 0 0 1 6.5 4h15A2.5 2.5 0 0 1 24 6.5v5h2v-5A4.5 4.5 0 0 0 21.5 2zm7.818 10H8a1 1 0 1 0 0 2h4.169a5 5 0 0 1 2.149-2M8 8a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2zm5 8.5a3.5 3.5 0 0 1 3.5-3.5h10a3.5 3.5 0 0 1 3.5 3.5v10a3.5 3.5 0 0 1-3.5 3.5h-10a3.5 3.5 0 0 1-3.5-3.5zm2 3.5v6.5a1.5 1.5 0 0 0 1.5 1.5h10a1.5 1.5 0 0 0 1.5-1.5V20zm13-2v-1.5a1.5 1.5 0 0 0-1.5-1.5h-10a1.5 1.5 0 0 0-1.5 1.5V18z");
}
</style><path class="e9zzaognc"/>`,
		"fallback": "fluent:calendar-template-32-regular",
	});
}

export default Component;
