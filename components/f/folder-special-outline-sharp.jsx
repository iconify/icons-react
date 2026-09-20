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
		"content": `<style>.ebb-pdgwp {
  fill: currentColor;
  d: path("m13.023 16.104l1.877-1.442l1.877 1.442l-.696-2.331l1.896-1.542h-2.33L14.9 9.95l-.746 2.28h-2.331l1.896 1.543zM3 19V5h6.596l2 2H21v12zm1-1h16V8h-8.806l-2-2H4zm0 0V6z");
}
</style><path class="ebb-pdgwp"/>`,
		"fallback": "material-symbols-light:folder-special-outline-sharp",
	});
}

export default Component;
