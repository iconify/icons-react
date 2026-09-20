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
		"content": `<style>.tge7gjbul {
  fill: currentColor;
  d: path("m9.55 15.88l8.802-8.801q.146-.146.344-.156t.363.156t.166.357t-.165.356l-8.944 8.95q-.243.243-.566.243t-.566-.243l-4.05-4.05q-.146-.146-.152-.347t.158-.366t.357-.165t.357.165z");
}
</style><path class="tge7gjbul"/>`,
		"fallback": "material-symbols-light:done-rounded",
	});
}

export default Component;
