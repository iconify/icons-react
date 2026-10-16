import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbbfuqbum.css';
import '../../css/n/n1uvowbjw.css';
import '../../css/o/o_1vsrx4z.css';
import '../../css/r/rb9owibwy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbbfuqbum"/><path class="n1uvowbjw"/><path class="o_1vsrx4z"/><path class="rb9owibwy"/>`,
		"fallback": "energy-icons:database-backup-48-bold",
	});
}

export default Component;
