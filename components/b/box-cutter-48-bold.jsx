import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpslvk5st.css';
import '../../css/u/umkdqbblg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpslvk5st"/><path class="umkdqbblg"/>`,
		"fallback": "energy-icons:box-cutter-48-bold",
	});
}

export default Component;
