import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lyhblcbnl.css';
import '../../css/b/b5fqkvbgz.css';
import '../../css/i/i7327t3bx.css';
import '../../css/z/z9shncc0q.css';
import '../../css/t/tt8nogban.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="lyhblcbnl"/><circle class="b5fqkvbgz"/><circle class="i7327t3bx"/><circle class="z9shncc0q"/><circle class="tt8nogban"/></g>`,
		"fallback": "hugeicons:chart-relationship",
	});
}

export default Component;
