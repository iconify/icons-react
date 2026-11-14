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
		"content": `<style>.ddlg8tper {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m17.72 2.47l-9.5 9.5q-.106.105-.163.243T8 12.5t.057.287t.163.243l.607.607q-.34.195-.68.535l-2.475 2.475q-1.591 1.591 0 3.181t3.181 0l2.475-2.475q.34-.34.535-.68l.607.607q.052.053.113.094t.13.069t.141.043t.146.014t.146-.014q.073-.015.141-.043t.13-.069t.113-.094l2.75-2.75q4.337-4.336 2.702-11.693q-.047-.213-.202-.367q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014q-.074 0-.146.014q-.073.015-.141.043t-.13.069q-.061.041-.113.094");
}
</style><path class="ddlg8tper"/>`,
		"fallback": "uix-solid:chef-knife",
	});
}

export default Component;
