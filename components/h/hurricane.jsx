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
		"content": `<style>.vbxnjjbak {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M11.221 4.305Q7.25 6.843 7.25 12q0 1.968 1.391 3.359q.954.953 2.178 1.253q-1.774 2.517-7.402 3.143q-.061.006-.121.023t-.116.044q-.056.026-.107.061t-.095.078q-.044.044-.081.093q-.037.05-.065.105q-.028.056-.047.115t-.027.12q-.022.148.015.292q.037.145.127.264t.218.195t.276.097q5.69.813 9.385-1.547Q16.75 17.157 16.75 12q0-1.968-1.391-3.359q-.954-.953-2.178-1.253q1.774-2.517 7.402-3.143q.061-.006.121-.023t.116-.044q.056-.026.107-.061t.095-.078t.081-.093t.065-.105t.047-.115t.027-.12q.011-.073.007-.147t-.022-.145t-.051-.138t-.076-.126t-.099-.108t-.119-.087t-.133-.063t-.143-.034q-5.69-.813-9.385 1.547m.284 2.968q-.902.085-1.673.485q.801-1.297 2.197-2.188q.938-.6 2.038-.963q-1.759 1.06-2.562 2.666m-1.572 12.12q1.759-1.06 2.562-2.666q.902-.085 1.673-.485q-.801 1.297-2.197 2.188q-.938.6-2.038.963");
}
</style><path class="vbxnjjbak"/>`,
		"fallback": "uix-solid:hurricane",
	});
}

export default Component;
