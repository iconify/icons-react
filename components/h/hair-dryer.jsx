import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/o/orqm88b8k.css';
import '../../css/d/d_lx0tbhx.css';
import '../../css/m/m--su9b4u.css';
import '../../css/m/m_ahhtk5h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGgwq2vbFe"><g class="aql7dnt-u"><path class="orqm88b8k"/><path class="d_lx0tbhx"/><path class="m--su9b4u"/><path class="m_ahhtk5h"/></g></mask></defs><path mask="url(#SVGgwq2vbFe)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:hair-dryer",
	});
}

export default Component;
