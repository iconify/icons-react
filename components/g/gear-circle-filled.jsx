import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/c/csha0-byu.css';
import '../../css/b/b7madzw7f.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGiKrBe3aA"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="csha0-byu"/><path class="b7madzw7f"/></g></mask></defs><circle mask="url(#SVGiKrBe3aA)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:gear-circle-filled",
	});
}

export default Component;
