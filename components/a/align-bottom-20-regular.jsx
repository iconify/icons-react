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
		"content": `<style>.mpg1mpbom {
  fill: currentColor;
  d: path("M2 16.5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 0-1h-15a.5.5 0 0 0-.5.5m9-3.5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2zm2 1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1zm-7 1a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2zm-1-2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1z");
}
</style><path class="mpg1mpbom"/>`,
		"fallback": "fluent:align-bottom-20-regular",
	});
}

export default Component;
