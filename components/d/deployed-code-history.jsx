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
		"content": `<style>.dxefd-ymb {
  fill: currentColor;
  d: path("M12 10.85L6.075 7.425L5 8.05V9.1l7 4.05l7-4.05V8.05l-1.075-.625zm-1 10.875L4 17.7q-.475-.275-.737-.725t-.263-1v-7.95q0-.55.263-1T4 6.3l7-4.025Q11.475 2 12 2t1 .275L20 6.3q.475.275.738.725t.262 1v4.65q-.675-.325-1.437-.5T18 12q-2.9 0-4.95 2.05T11 19q0 .8.163 1.538t.487 1.412q-.175-.05-.337-.087T11 21.725m3.463.813Q13 21.075 13 19t1.463-3.537T18 14t3.538 1.463T23 19t-1.463 3.538T18 24t-3.537-1.463M18.5 18.8V16h-1v3.2l2.15 2.15l.7-.7z");
}
</style><path class="dxefd-ymb"/>`,
		"fallback": "material-symbols:deployed-code-history",
	});
}

export default Component;
