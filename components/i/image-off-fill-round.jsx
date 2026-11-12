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
		"content": `<style>.n364bz6ks {
  fill: currentColor;
  d: path("m2.707 1.293l20 20a.999.999 0 1 1-1.414 1.414l-1.535-1.535A5 5 0 0 1 17 22H7a4.99 4.99 0 0 1-4.584-3.001L10 11.414L8.586 10L2 16.586V7c0-.981.286-1.94.828-2.758L1.293 2.707a.999.999 0 1 1 1.414-1.414m19.244 16.415L6.292 2.049Q6.644 1.999 7 2h10a5 5 0 0 1 5 5v10q0 .356-.049.708M15.158 6.221a2 2 0 1 0 3.684 1.558a2 2 0 0 0-3.684-1.558");
}
</style><path class="n364bz6ks"/>`,
		"fallback": "coolicons:image-off-fill-round",
	});
}

export default Component;
