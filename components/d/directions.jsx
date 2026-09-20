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
		"content": `<style>.pfp38lb6j {
  fill: currentColor;
  d: path("M8.5 14.5h1v-3H14v1.789L16.288 11L14 8.692V10.5H9.308q-.343 0-.576.23t-.232.57zm3.504 6.23q-.302 0-.596-.12q-.295-.121-.539-.364l-7.115-7.115q-.242-.242-.363-.533q-.122-.292-.122-.594t.122-.596t.363-.539l7.115-7.115q.242-.242.534-.363q.291-.122.593-.122t.597.122t.538.363l7.115 7.115q.243.242.364.534q.12.291.12.593t-.12.597t-.364.538l-7.115 7.115q-.242.243-.533.364q-.292.12-.594.12");
}
</style><path class="pfp38lb6j"/>`,
		"fallback": "material-symbols-light:directions",
	});
}

export default Component;
