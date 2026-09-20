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
		"content": `<style>.tyso1d9ig {
  fill: currentColor;
  d: path("M6.625 22q-1.975 0-3.363-1.388T1.875 17.25q0-1.425.738-2.55T4.55 13H2v-2h6v6H6v-2.425q-.925.2-1.525.95t-.6 1.725q0 1.15.812 1.95t1.938.8zM10 21v-2h9V5H5v4H3V3h18v18zm0-4h4v-2h-4zm0-4h7v-2h-7zM7 9h10V7H7z");
}
</style><path class="tyso1d9ig"/>`,
		"fallback": "material-symbols:article-shortcut-outline-sharp",
	});
}

export default Component;
