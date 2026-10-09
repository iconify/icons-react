import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eoyqh5bdz.css';
import '../../css/s/swyl5jbbl.css';
import '../../css/g/g52f6mtwi.css';
import '../../css/c/c65-ehvfy.css';
import '../../css/f/fh9swnvjp.css';
import '../../css/v/vyac_xc2w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eoyqh5bdz"/><path class="swyl5jbbl"/><path class="g52f6mtwi"/><path class="c65-ehvfy"/><path class="fh9swnvjp"/><path class="vyac_xc2w"/>`,
		"fallback": "energy-icons:bifacial-panel-48",
	});
}

export default Component;
