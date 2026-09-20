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
		"content": `<style>.evm4fabvp {
  fill: currentColor;
  d: path("M4 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2zm6 .5a.5.5 0 0 0-.5.5v1.063a2 2 0 0 0-.744 3.504l-1.213 2.73a.5.5 0 0 0 .914.406l1.213-2.73a2 2 0 0 0 .66 0l1.213 2.73a.5.5 0 1 0 .914-.406l-1.214-2.73a2 2 0 0 0-.743-3.504V5a.5.5 0 0 0-.5-.5m-.5 2.634a1 1 0 1 0 1 1.731a1 1 0 0 0-1-1.731");
}
</style><path class="evm4fabvp"/>`,
		"fallback": "fluent:book-compass-20-filled",
	});
}

export default Component;
