import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7ft_mbie.css';
import '../../css/l/lznd2ybdz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7ft_mbie"/><path class="lznd2ybdz"/>`,
		"fallback": "energy-icons:chef-hat-48-bold",
	});
}

export default Component;
