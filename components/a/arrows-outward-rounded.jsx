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
		"content": `<style>.ttkkgpwpb {
  fill: currentColor;
  d: path("M18.175 13H13v-2h5.175L16.3 9.125q-.275-.3-.288-.712T16.3 7.7t.7-.3t.7.3l3.6 3.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-3.6 3.6q-.3.3-.7.3t-.7-.3t-.3-.712t.3-.713zm-12.35 0L7.7 14.875q.275.3.287.713T7.7 16.3t-.7.3t-.7-.3l-3.6-3.6q-.15-.15-.213-.325T2.426 12t.063-.375t.212-.325l3.6-3.6q.3-.3.7-.3t.7.3t.3.713t-.3.712L5.825 11H11v2z");
}
</style><path class="ttkkgpwpb"/>`,
		"fallback": "material-symbols:arrows-outward-rounded",
	});
}

export default Component;
