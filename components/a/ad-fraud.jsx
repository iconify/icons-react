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
		"content": `<style>.she9075mw {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M11.337 2.649q.108-.204.312-.312q.065-.034.136-.056t.144-.028q.074-.007.147.001q.074.007.145.029t.135.057t.122.082t.104.105t.081.122l9 17q.087.165.087.351q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014H3q-.186 0-.351-.087q-.065-.035-.122-.081q-.058-.047-.105-.104t-.082-.122t-.057-.135q-.022-.071-.029-.145q-.008-.073-.001-.147q.007-.073.028-.144t.056-.136z");
}
</style><path class="she9075mw"/>`,
		"fallback": "uix-solid:ad-fraud",
	});
}

export default Component;
