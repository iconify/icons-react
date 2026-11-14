import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.m_9_9jb5z {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7.063 8.699L5.509 12.25H5.5q-.932 0-1.591.659T3.25 14.5q0 1.677 1.25 2.104q-.5.823-.5 2.146q0 3.5 3.5 3.5t3.5-3.5q0-1.209-.417-2h2.834q-.417.791-.417 2q0 3.5 3.5 3.5t3.5-3.5q0-1.323-.5-2.146q1.25-.427 1.25-2.104q0-2.25-2.25-2.25h-.009l-1.554-3.551q-.044-.1-.114-.183q-.071-.084-.162-.144t-.197-.091q-.105-.031-.214-.031h-.971l-1.073-3.002q-.025-.07-.063-.134l-1.5-2.5q-.096-.161-.257-.257q-.063-.038-.133-.063t-.143-.036t-.146-.007q-.074.003-.146.021t-.138.05q-.067.031-.126.075q-.06.044-.109.099q-.05.055-.088.118l-1.5 2.5q-.038.064-.063.134L8.721 8.25H7.75q-.109 0-.214.031t-.197.091t-.162.144q-.07.083-.114.183m9.79 3.551H7.147l1.094-2.5H9.25q.116 0 .227-.035q.11-.035.205-.102t.165-.159t.109-.202l1.225-3.43L12 4.458l.819 1.364l1.225 3.43q.039.11.109.202t.165.159t.205.102t.227.035h1.009z");
}
</style><path class="m_9_9jb5z"/>`,
		"fallback": "uix-solid:festival-chariot",
	});
}

export default Component;
