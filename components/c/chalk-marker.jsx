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
		"content": `<style>.ax6ztpbsa {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18.605 8.697q.37-1.107-.264-1.978l1.26-1.26q.106-.105.163-.243t.057-.287t-.057-.287t-.163-.243q-.052-.053-.113-.094t-.13-.069t-.141-.043q-.072-.014-.146-.014t-.146.014q-.073.015-.141.043t-.13.069t-.113.094l-1.26 1.26q-.871-.634-1.979-.264l-.445.149h-.001q-.714.238-.975.891q-.852-.06-1.704.792l-4.95 4.95q-.608.608-.751 1.215q-.066-.003-.133-.003q-1.035 0-1.767.732l-1.061 1.06v.001q-.733.732-.733 1.768q0 1.035.733 1.767l1.768 1.768q.732.733 1.768.733q1.035 0 1.768-.733l1.059-1.061q.733-.732.733-1.767q0-.067-.003-.133q.607-.143 1.215-.751l4.95-4.95q.852-.852.792-1.704q.653-.261.891-.975z");
}
</style><path class="ax6ztpbsa"/>`,
		"fallback": "uix-solid:chalk-marker",
	});
}

export default Component;
