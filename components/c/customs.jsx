import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.sy1tvhbxn {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.431 2 32c0 16.568 13.432 30 30 30s30-13.432 30-30C62 15.431 48.568 2 32 2m14.709 10.471v3.801h-9.555l-.949-3.801zm-9.555 4.751h9.555v4.751c0 4.764-9.555 4.764-9.555 0v-1.9h-3.801zm-5.73 32.305h-14v-6h-6V29.528h6v13.999h14zm-5.449-7.75h-5.701l13.502-14.104h14.402L33.785 42.082v-8.465zm24.601 7.752H33.785v-5.045h16.791zm0-6.724H35.463l15.113-15.131z");
}
</style><path class="sy1tvhbxn"/>`,
		"fallback": "emojione-monotone:customs",
	});
}

export default Component;
