import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxodcsbxg.css';
import '../../css/b/bioritexk.css';
import '../../css/h/hmpjhub9l.css';
import '../../css/p/pzmtr-buq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxodcsbxg"/><path class="bioritexk"/><path class="hmpjhub9l"/><path clip-rule="evenodd" class="pzmtr-buq"/>`,
		"fallback": "solar:folder-kanban-outline",
	});
}

export default Component;
