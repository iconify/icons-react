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
		"content": `<style>.l58h0bcym {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m19.225 4.729l-1.392-1.391q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014t-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.106.105-.163.243t-.057.287t.057.287t.163.243l.884.885l-6.421 6.42q-.756-.478-1.711-.478q-1.346 0-2.298.952l-2.475 2.475q-.952.952-.952 2.298t.952 2.298t2.298.952t2.298-.952l2.475-2.475q.952-.952.952-2.298q0-.955-.478-1.711l6.421-6.421l.884.884q.052.053.113.094t.13.069t.141.043t.146.014t.146-.014q.073-.015.141-.043t.13-.069t.113-.094q.106-.105.163-.243t.057-.287t-.057-.287t-.163-.243l-1.391-1.392l-.023-.023z");
}
</style><path class="l58h0bcym"/>`,
		"fallback": "uix-solid:canoe-paddle",
	});
}

export default Component;
