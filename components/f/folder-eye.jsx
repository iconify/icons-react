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
		"content": `<style>.nwcy1x34w {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.25 7q0-2.75 2.75-2.75h4.5q.149 0 .287.057t.243.163l1.781 1.78H19q2.75 0 2.75 2.75v8q0 2.75-2.75 2.75H5q-2.75 0-2.75-2.75zM12 10q-2.864 0-4.651 3.128q-.049.085-.074.179q-.025.095-.025.193t.025.193q.025.094.074.179Q9.136 17 12 17t4.651-3.128q.049-.085.074-.179q.025-.095.025-.193t-.025-.193q-.025-.094-.074-.179Q14.864 10 12 10");
}
</style><path class="nwcy1x34w"/>`,
		"fallback": "uix-solid:folder-eye",
	});
}

export default Component;
