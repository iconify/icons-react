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
		"content": `<style>.nj9y9522o {
  fill: currentColor;
  d: path("M10.5 2.5a.5.5 0 0 0-1 0v15a.5.5 0 0 0 1 0zm1 14.5H15a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-3.5v1H15a2 2 0 0 1 2 2v8c0 .373-.102.722-.28 1.02l-4.669-4.588a1.5 1.5 0 0 0-.551-.345v1.205l4.512 4.434A2 2 0 0 1 15 16h-3.5zm2-8a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0-2a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1M2 6a3 3 0 0 1 3-3a.5.5 0 0 1 0 1a2 2 0 0 0-2 2v.5a.5.5 0 0 1-1 0zm5-3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM3 8.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0zM5 17a3 3 0 0 1-3-3v-.5a.5.5 0 0 1 1 0v.5a2 2 0 0 0 2 2a.5.5 0 0 1 0 1m1.5-.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 0-1H7a.5.5 0 0 0-.5.5");
}
</style><path class="nj9y9522o"/>`,
		"fallback": "fluent:image-split-20-regular",
	});
}

export default Component;
