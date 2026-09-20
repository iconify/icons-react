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
		"content": `<style>.czfp-7_5o {
  fill: currentColor;
  d: path("m3 19l5.5-7L3 4.98h12.462L21 12l-.183.214q-.663-.326-1.369-.491T18 11.558q-2.708 0-4.613 1.867T11.442 18q0 .256.017.506t.072.494zm15 3.289q-1.748 0-2.96-1.213t-1.213-2.96t1.213-2.961T18 13.942t2.96 1.213t1.213 2.96t-1.213 2.961T18 22.288m-.629-2.461l2.84-2.796l-.626-.627l-2.214 2.182l-.955-.975l-.627.633z");
}
</style><path class="czfp-7_5o"/>`,
		"fallback": "material-symbols-light:all-match-sharp",
	});
}

export default Component;
