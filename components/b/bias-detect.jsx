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
		"content": `<style>.xiyqd8bxf {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3.608 3.861q-.113.069-.195.173q-.083.103-.125.229l-2 6q-.038.115-.038.237q0 2.75 2.75 2.75t2.75-2.75q0-.122-.038-.237L5.144 5.559l6.106 1.527V18.75H8q-.074 0-.146.014q-.073.015-.141.043t-.13.069q-.061.041-.113.094q-.053.052-.094.113t-.069.13t-.043.141t-.014.146q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014h8q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13q-.041-.061-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043T16 18.75h-3.25V7.461l6.282 1.57l-1.744 5.232q-.038.115-.038.237q0 2.75 2.75 2.75t2.75-2.75q0-.122-.038-.237l-2-5.999v-.001q-.027-.078-.069-.149q-.107-.178-.291-.276l-.017-.009q-.073-.037-.153-.057l-8-2l-8-2l-.028-.006q-.199-.042-.391.022q-.078.027-.149.069z");
}
</style><path class="xiyqd8bxf"/>`,
		"fallback": "uix-solid:bias-detect",
	});
}

export default Component;
