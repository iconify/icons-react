import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.euav2xb2c {
  fill: currentColor;
  d: path("M2.5 5.75A3.25 3.25 0 0 1 5.75 2.5h12.5a3.25 3.25 0 0 1 3.25 3.25v12.5a3.25 3.25 0 0 1-3.25 3.25H5.75a3.25 3.25 0 0 1-3.25-3.25zM5.75 5a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75V5.75a.75.75 0 0 0-.75-.75z");
}
</style><path class="euav2xb2c"/>`,
		"fallback": "fluent:border-outside-thick-24-filled",
	});
}

export default Component;
