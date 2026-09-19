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
		"content": `<style>.sawjzzs3e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.758 42.175c-1.494-.862-1.295-2.844-1.295-2.844V8.669s-.2-1.98 1.295-2.843s3.194.26 3.194.26L38.761 21.55s1.785.816 1.785 2.449s-1.785 2.45-1.785 2.45L11.953 41.915s-1.698 1.123-3.195.26m21.605-14.877v-3.274m2.252-3.276l-2.252 3.276l-2.252-3.275m-5.469 6.55l2.252-6.55l2.253 6.55m-9.88-6.55v6.549h3.399m-9.87 0V20.75h2.227c1.258 0 2.279.985 2.279 2.2s-1.02 2.2-2.28 2.2h-2.225");
}
</style><path class="sawjzzs3e"/>`,
		"fallback": "arcticons:ais-play",
	});
}

export default Component;
