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
		"content": `<style>.lb6gu4b7o {
  fill: currentColor;
  d: path("M3.714 19.287q-.945-.945-.945-2.287t.944-2.286T6 13.769t2.286.944T9.232 17t-.944 2.286T6 20.232t-2.286-.945m12 0q-.945-.944-.945-2.286t.944-2.286T18 13.769t2.286.944t.945 2.287t-.945 2.286t-2.286.945t-2.286-.945m-4.785-5.215q-.444-.444-.444-1.071t.444-1.071T12 11.485t1.071.444t.445 1.071t-.445 1.071t-1.071.445t-1.071-.445M9.714 8.287Q8.769 7.342 8.769 6t.944-2.286T12 2.769t2.286.945T15.232 6t-.944 2.286T12 9.232t-2.286-.944");
}
</style><path class="lb6gu4b7o"/>`,
		"fallback": "material-symbols-light:circles-ext-rounded",
	});
}

export default Component;
