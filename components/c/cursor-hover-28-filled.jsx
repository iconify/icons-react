import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qf-9-p86c {
  fill: currentColor;
  d: path("M2 7.75A2.75 2.75 0 0 1 4.75 5h18.5A2.75 2.75 0 0 1 26 7.75v11.5A2.75 2.75 0 0 1 23.25 22h-.073a1.75 1.75 0 0 0-.44-1.737l-9-9A1.75 1.75 0 0 0 10.75 12.5V22h-6A2.75 2.75 0 0 1 2 19.25zm11.03 4.22a.75.75 0 0 0-1.28.53v12.75a.75.75 0 0 0 1.326.48l3.393-4.071a.25.25 0 0 1 .227-.088l4.698.671a.75.75 0 0 0 .636-1.272z");
}
</style><path class="qf-9-p86c"/>`,
		"fallback": "fluent:cursor-hover-28-filled",
	});
}

export default Component;
