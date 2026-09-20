import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vrz-zm0wt {
  fill: currentColor;
  d: path("M9.023 6q.047.516.185 1H4a1 1 0 0 0-1 1v1h7.258c.314.38.678.716 1.082 1H9v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zM16 16.5a.5.5 0 0 1-1 0v-5.524a5.5 5.5 0 0 0 1-.185zM3 15a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-5H3zm14.998-.5a.5.5 0 1 1-1 0v-4.1a5.5 5.5 0 0 0 1-.656zM6.5 11a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm8-10a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9m2.354 2.646a.5.5 0 0 0-.707 0L13.5 6.293l-.646-.647a.5.5 0 1 0-.707.708l1 1a.5.5 0 0 0 .707 0l3-3a.5.5 0 0 0 0-.708M9.208 4a5.5 5.5 0 0 0-.185 1H4.266a2 2 0 0 1 1.732-1z");
}
</style><path class="vrz-zm0wt"/>`,
		"fallback": "fluent:desk-multiple-checkmark-20-regular",
	});
}

export default Component;
