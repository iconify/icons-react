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
		"content": `<style>.awliocbyf {
  fill: currentColor;
  d: path("M8 2a3 3 0 0 0-3 3v8.96c.628-.24 1.3-.393 2-.442V5a1 1 0 0 1 1-1h9v5a3 3 0 0 0 3 3h5v15a1 1 0 0 1-1 1H13.5v2H24a3 3 0 0 0 3-3V10.828a3 3 0 0 0-.879-2.12l-5.828-5.83A3 3 0 0 0 18.172 2zm16.586 8H20a1 1 0 0 1-1-1V4.414zM7 15.022A5.5 5.5 0 0 0 2 20.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 0 0-6-5.478M4.444 30.861A.95.95 0 0 1 3 30.05v-4.518a6.7 6.7 0 0 0 4.5 1.719a6.72 6.72 0 0 0 4.5-1.72v4.519a.95.95 0 0 1-1.444.811L7.5 29z");
}
</style><path class="awliocbyf"/>`,
		"fallback": "fluent:document-ribbon-32-regular",
	});
}

export default Component;
