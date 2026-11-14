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
		"content": `<style>.kgq0fmvmx {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.5 2.25h15q2.75 0 2.75 2.75v10.5q0 2.75-2.75 2.75h-9.243L5.96 21.592q-.058.045-.124.078q-.066.034-.137.053q-.071.02-.145.025t-.147-.004t-.143-.032q-.071-.024-.135-.06q-.064-.037-.12-.085t-.101-.107q-.077-.098-.117-.217q-.041-.118-.041-.243v-2.75H4.5q-2.75 0-2.75-2.75V5q0-1.139.805-1.945q.806-.805 1.945-.805m7.5 3Q9.25 5.25 9.25 8T12 10.75T14.75 8T12 5.25M12 12q-4.75 0-4.75 2.75q0 .074.014.146q.015.073.043.141t.069.13t.094.113q.052.053.113.094t.13.069t.141.043T8 15.5t.146-.014q.073-.015.141-.043t.13-.069t.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146q0-1.25 3.25-1.25t3.25 1.25q0 .074.014.146q.015.073.043.141t.069.13t.094.113q.052.053.113.094t.13.069t.141.043t.146.014t.146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146Q16.75 12 12 12");
}
</style><path class="kgq0fmvmx"/>`,
		"fallback": "uix-solid:impact-story",
	});
}

export default Component;
