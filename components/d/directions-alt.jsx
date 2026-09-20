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
		"content": `<style>.jbyd7t1fa {
  fill: currentColor;
  d: path("M12.004 20.73q-.302 0-.596-.12q-.295-.121-.539-.364l-7.115-7.115q-.242-.242-.363-.533q-.122-.292-.122-.594t.122-.596t.363-.539l7.115-7.115q.242-.242.534-.363q.291-.122.593-.122t.597.122t.538.363l7.115 7.115q.243.242.364.534q.12.291.12.593t-.12.597t-.364.538l-7.115 7.115q-.242.243-.533.364q-.292.12-.594.12M12 16.309L16.308 12L12 7.692l-.708.708l3.089 3.1H7.692v1h6.689l-3.089 3.1z");
}
</style><path class="jbyd7t1fa"/>`,
		"fallback": "material-symbols-light:directions-alt",
	});
}

export default Component;
