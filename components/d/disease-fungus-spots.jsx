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
		"content": `<style>.kjugybcch {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6.22 6.22q-4.633 4.632-3.465 14.369q.008.062.025.123q.018.06.045.116q.028.056.064.107t.081.095q.044.045.095.081t.107.064q.056.027.116.045t.123.025q9.737 1.168 14.369-3.465q4.633-4.632 3.465-14.369q-.008-.062-.025-.123q-.018-.06-.045-.116q-.028-.056-.064-.107t-.081-.095t-.095-.081t-.107-.064t-.116-.045t-.123-.025Q10.852 1.587 6.22 6.22m10.28-.97q2.25 0 2.25 2.25T16.5 9.75T14.25 7.5t2.25-2.25M9.25 12q0-2.75 2.75-2.75T14.75 12T12 14.75T9.25 12M5.5 16.5q0-2 2-2t2 2t-2 2t-2-2");
}
</style><path class="kjugybcch"/>`,
		"fallback": "uix-solid:disease-fungus-spots",
	});
}

export default Component;
