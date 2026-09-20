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
		"content": `<style>.a18hwmbdj {
  fill: currentColor;
  d: path("M7.5 22.27q-1.458 0-2.479-1.022Q4 20.227 4 18.769v-2.846h4.239l3.226 4.294l4.772-4.77l2.686-1.616q.423-.248.918-.218q.493.031.878.323l1.037.772l-6.822 6.82q-.367.368-.811.555t-.954.186zM4 14.922V5.269q0-.212.144-.356t.357-.144t.356.144t.143.356v6.5h2.673v-8.5q0-.212.144-.356t.357-.144t.356.144t.143.356v8.5h2.654v-9.5q0-.212.144-.356t.357-.144t.356.144t.143.356v9.5H15v-7.5q0-.212.144-.356t.357-.144t.356.144t.143.356v10.018l-4.43 4.419l-2.831-3.783z");
}
</style><path class="a18hwmbdj"/>`,
		"fallback": "material-symbols-light:eda",
	});
}

export default Component;
