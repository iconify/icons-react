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
		"content": `<style>.esephx4ku {
  fill: currentColor;
  d: path("M4 18V6zm2.385-2.384v-4.462h8.461v4.462zM3 19V5h18v7.385h-1V6H4v12h9v1zm13.73-6.616V9.27H9v-.885h8.616v4zM18 21v-2.616h-2.615v-1H18V14.77h1v2.615h2.616v1H19V21z");
}
</style><path class="esephx4ku"/>`,
		"fallback": "material-symbols-light:desktop-landscape-add-outline-sharp",
	});
}

export default Component;
