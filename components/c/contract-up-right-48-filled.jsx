import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jkagxrbsa {
  fill: currentColor;
  d: path("M6 12.25A6.25 6.25 0 0 1 12.25 6h23.5A6.25 6.25 0 0 1 42 12.25v23.5A6.25 6.25 0 0 1 35.75 42h-7.5a1.25 1.25 0 1 1 0-2.5h7.5a3.75 3.75 0 0 0 3.75-3.75V24H29.25A5.25 5.25 0 0 1 24 18.75V8.5H12.25a3.75 3.75 0 0 0-3.75 3.75v7.5a1.25 1.25 0 1 1-2.5 0zM7.25 29.5a1.25 1.25 0 1 1 0-2.5h12.5c.69 0 1.25.56 1.25 1.25v12.5a1.25 1.25 0 1 1-2.5 0v-9.482L8.134 41.634a1.25 1.25 0 0 1-1.768-1.768L16.732 29.5z");
}
</style><path class="jkagxrbsa"/>`,
		"fallback": "fluent:contract-up-right-48-filled",
	});
}

export default Component;
