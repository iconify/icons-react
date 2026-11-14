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
		"content": `<style>.e-xs1cbsy {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5 19.75q15.25 0 15.25-14.75q0-.036-.003-.071q-.007-.074-.029-.144q-.021-.071-.055-.136q-.035-.066-.082-.123q-.046-.057-.103-.104t-.122-.082t-.136-.057t-.144-.029q-.074-.008-.147-.001Q4.25 5.699 4.25 19q0-.15.057-.287q.057-.138.163-.243l7-7q.052-.053.113-.094t.13-.069t.141-.043t.146-.014t.146.014q.073.015.141.043t.13.069t.113.094q.053.052.094.113t.069.13t.043.141t.014.146t-.014.146q-.015.073-.043.141t-.069.13t-.094.113l-7 7q-.105.106-.243.163T5 19.75");
}
</style><path class="e-xs1cbsy"/>`,
		"fallback": "uix-solid:category-organic",
	});
}

export default Component;
