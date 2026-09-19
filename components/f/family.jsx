import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/u/um11cq07f.css';
import '../../css/p/pltcxobma.css';
import '../../css/b/bdq47285o.css';
import '../../css/b/bpvfad8uc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="um11cq07f"/><circle class="pltcxobma"/><circle class="bdq47285o"/><circle class="bpvfad8uc"/></g>`,
		"fallback": "icon-park-solid:family",
	});
}

export default Component;
