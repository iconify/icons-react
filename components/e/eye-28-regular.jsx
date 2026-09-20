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
		"content": `<style>.stpllnbny {
  fill: currentColor;
  d: path("M25.257 16h.005h-.01zm-.705-.52c.1.318.387.518.704.52c.07 0 .148-.02.226-.04c.39-.12.61-.55.48-.94C25.932 14.93 22.932 6 14 6S2.067 14.93 2.037 15.02c-.13.39.09.81.48.94c.4.13.82-.09.95-.48l.003-.005c.133-.39 2.737-7.975 10.54-7.975c7.842 0 10.432 7.65 10.542 7.98M10.5 16a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0m3.5-5a5 5 0 1 0 0 10a5 5 0 0 0 0-10");
}
</style><path class="stpllnbny"/>`,
		"fallback": "fluent:eye-28-regular",
	});
}

export default Component;
