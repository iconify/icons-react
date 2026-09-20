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
		"content": `<style>.wqg1drfdn {
  fill: currentColor;
  d: path("M10.077 13.462V7.154q-2.885 0-4.596 1.904T3.769 13.46zm2.673 6.769H4v-1h8.75zm1.712-2.385H2.769v-4.384q0-2.927 2.008-5.118q2.007-2.19 5.3-2.19h4.385V10h4.884l.885-2h1v5.98l-6.77.705zM18.75 4.77H4v-1h14.75z");
}
</style><path class="wqg1drfdn"/>`,
		"fallback": "material-symbols-light:helicopter-sharp",
	});
}

export default Component;
