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
		"content": `<style>.m15zk7_fr {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7.625 3.783q-1.125-.649-2.25 0L3.194 5.042q-1.125.65-1.125 1.949v2.518q0 1.299 1.125 1.949l2.181 1.259q.25.144.501.224q-.057.259-.057.55v2.518q0 1.299 1.125 1.949l2.181 1.259q1.125.649 2.25 0l2.181-1.259q.173-.1.319-.215q.146.115.319.215l2.181 1.259q1.125.649 2.25 0l2.181-1.259q1.125-.65 1.125-1.949v-2.518q0-1.299-1.125-1.949l-2.181-1.259q-.25-.144-.501-.224q.057-.259.057-.55V6.991q0-1.299-1.125-1.949l-2.181-1.259q-1.125-.649-2.25 0l-2.181 1.259q-.173.1-.319.215q-.146-.115-.319-.215z");
}
</style><path class="m15zk7_fr"/>`,
		"fallback": "uix-solid:chart-hexbin",
	});
}

export default Component;
