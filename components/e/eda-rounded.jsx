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
		"content": `<style>.xjiiovbfg {
  fill: currentColor;
  d: path("M7.5 22.27q-1.458 0-2.479-1.022Q4 20.227 4 18.769v-2.846h3.93q.155 0 .28.068q.124.067.22.182l1.91 2.56q.454.59 1.181.646t1.262-.479l3.454-3.454l2.686-1.615q.423-.248.918-.217q.493.03.878.323q.414.32.444.827t-.327.863l-5.901 5.902q-.368.367-.812.554t-.948.186zM4 14.922V5.269q0-.213.143-.356t.357-.144t.357.144t.143.356v6.5h2.673v-8.5q0-.213.143-.356t.357-.144t.357.144t.143.356v8.5h2.654v-9.5q0-.213.143-.356t.357-.144t.357.144t.143.356v9.5H15v-7.5q0-.213.143-.357t.357-.143t.357.143t.143.357v10.018l-3.93 3.919q-.212.211-.482.183q-.269-.03-.442-.26l-1.923-2.56q-.217-.298-.565-.472q-.349-.174-.727-.174z");
}
</style><path class="xjiiovbfg"/>`,
		"fallback": "material-symbols-light:eda-rounded",
	});
}

export default Component;
