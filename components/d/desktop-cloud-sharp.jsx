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
		"content": `<style>.y-eh1cb7d {
  fill: currentColor;
  d: path("M9 14h6.5q.84 0 1.42-.59t.58-1.432t-.596-1.422t-1.454-.581h-.27V9.86q-.045-1.218-.972-2.039T12 7q-.88 0-1.61.473T9.292 8.737l-.134.269l-.289.019q-1.007.05-1.688.759q-.681.708-.681 1.71q0 1.045.73 1.775Q7.957 14 9 14m0 6v-1h2v-2H3V4h18v13h-8v2h2v1z");
}
</style><path class="y-eh1cb7d"/>`,
		"fallback": "material-symbols-light:desktop-cloud-sharp",
	});
}

export default Component;
