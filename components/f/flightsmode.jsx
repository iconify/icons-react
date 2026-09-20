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
		"content": `<style>.pf10qvysj {
  fill: currentColor;
  d: path("m9.983 20.048l-2.09-3.946l-3.966-2.11l1.083-1.077l3.452.587l3.05-3.05L4.01 7.25l1.388-1.38l9.125 1.565l3.12-3.139q.42-.421 1.03-.421t1.03.421q.422.421.422 1.028t-.421 1.028l-3.145 3.125l1.566 9.12l-1.394 1.394l-3.189-7.502l-3.05 3.05l.573 3.427z");
}
</style><path class="pf10qvysj"/>`,
		"fallback": "material-symbols-light:flightsmode",
	});
}

export default Component;
