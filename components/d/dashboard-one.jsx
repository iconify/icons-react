import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/l/l356zpi2t.css';
import '../../css/l/l94fsvbck.css';
import '../../css/p/pvs97mopz.css';
import '../../css/m/maw6_-12u.css';

const viewBox = {"width":49,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG5JZtCW7p"><g class="aql7dnt-u"><path class="l356zpi2t"/><circle class="l94fsvbck"/><path class="pvs97mopz"/></g></mask></defs><path mask="url(#SVG5JZtCW7p)" class="maw6_-12u"/>`,
		"fallback": "icon-park-twotone:dashboard-one",
	});
}

export default Component;
