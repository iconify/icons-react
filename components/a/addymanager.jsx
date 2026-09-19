import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bi_zivbuv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.475 27.416v5.164a2 2 0 0 0 2 2H41.5a2 2 0 0 0 2-2V15.42a2 2 0 0 0-2-2H14.475a2 2 0 0 0-2 2v4.847");
}

.uhsqa_xfn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m40.442 16.478l-12.455 9.166l-12.454-9.166m14.904 7.363l10.005 7.363m-24.909 0l10.005-7.363m-10.005 0h-8.94m3.875-3.574H4.5m5.968 7.149H4.5");
}
</style><path class="bi_zivbuv"/><path class="uhsqa_xfn"/>`,
		"fallback": "arcticons:addymanager",
	});
}

export default Component;
