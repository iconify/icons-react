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
		"content": `<style>.vwpm8vb0f {
  fill: currentColor;
  d: path("M20.48 16.02q-.21-.209-.21-.52t.21-.52q.209-.21.52-.21t.52.21q.21.209.21.52t-.21.52q-.209.21-.52.21t-.52-.21m.02-2.904V7.5h1v5.616zM2 17V7h16.116v1H3v8h15.154q.038.287.126.53t.226.47zm1-1V8z");
}
</style><path class="vwpm8vb0f"/>`,
		"fallback": "material-symbols-light:battery-android-alert-outline-sharp",
	});
}

export default Component;
